import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl');
}

export default function OldSchoolArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl" />;
}
