import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-download');
}

export default function OldSchoolCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-download" />;
}
