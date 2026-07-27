import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-download');
}

export default function LowrateImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-download" />;
}
