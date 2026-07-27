import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-download');
}

export default function ActiveCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-download" />;
}
