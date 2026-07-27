import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-ot-server');
}

export default function OldSchoolArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-ot-server" />;
}
