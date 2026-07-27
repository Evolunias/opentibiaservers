import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-download');
}

export default function CurrentYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-download" />;
}
