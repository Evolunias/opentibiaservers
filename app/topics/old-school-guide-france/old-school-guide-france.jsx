import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-france');
}

export default function OldSchoolGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-france" />;
}
