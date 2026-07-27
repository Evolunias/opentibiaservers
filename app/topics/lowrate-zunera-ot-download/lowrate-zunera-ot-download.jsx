import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-download');
}

export default function LowrateZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-download" />;
}
