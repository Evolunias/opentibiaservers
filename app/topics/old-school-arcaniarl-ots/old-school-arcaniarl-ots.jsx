import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-ots');
}

export default function OldSchoolArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-ots" />;
}
