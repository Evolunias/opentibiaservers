import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-login');
}

export default function OldSchoolArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-login" />;
}
