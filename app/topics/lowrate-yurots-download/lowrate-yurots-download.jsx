import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-download');
}

export default function LowrateYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-download" />;
}
