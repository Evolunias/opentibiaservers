import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-website');
}

export default function OldSchoolCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-website" />;
}
