import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-download');
}

export default function FreshStartYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-download" />;
}
