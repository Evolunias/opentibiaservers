import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-download');
}

export default function TopZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-download" />;
}
