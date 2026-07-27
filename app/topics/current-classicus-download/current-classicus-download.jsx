import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-download');
}

export default function CurrentClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-download" />;
}
