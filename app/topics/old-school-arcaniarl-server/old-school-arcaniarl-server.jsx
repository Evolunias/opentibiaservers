import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-server');
}

export default function OldSchoolArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-server" />;
}
