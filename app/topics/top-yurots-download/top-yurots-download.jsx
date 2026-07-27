import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-download');
}

export default function TopYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-download" />;
}
