import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-download');
}

export default function CurrentTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-download" />;
}
