import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-download');
}

export default function BestYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-download" />;
}
