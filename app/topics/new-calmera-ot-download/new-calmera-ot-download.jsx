import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-download');
}

export default function NewCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-download" />;
}
