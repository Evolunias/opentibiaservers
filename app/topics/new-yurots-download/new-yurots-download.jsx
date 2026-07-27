import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-download');
}

export default function NewYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-download" />;
}
