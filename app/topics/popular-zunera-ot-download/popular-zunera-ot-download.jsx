import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-download');
}

export default function PopularZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-download" />;
}
