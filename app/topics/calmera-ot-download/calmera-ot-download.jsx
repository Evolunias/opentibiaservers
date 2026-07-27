import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-download');
}

export default function CalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-download" />;
}
