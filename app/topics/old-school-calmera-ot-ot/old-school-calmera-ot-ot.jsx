import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-ot');
}

export default function OldSchoolCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-ot" />;
}
