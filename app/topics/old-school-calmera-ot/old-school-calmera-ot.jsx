import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot');
}

export default function OldSchoolCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot" />;
}
