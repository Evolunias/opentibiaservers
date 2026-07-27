import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-download');
}

export default function CurrentZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-download" />;
}
