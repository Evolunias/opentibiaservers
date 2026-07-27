import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-ot');
}

export default function OldSchoolArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-ot" />;
}
