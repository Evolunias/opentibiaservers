import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-download');
}

export default function PopularCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-download" />;
}
