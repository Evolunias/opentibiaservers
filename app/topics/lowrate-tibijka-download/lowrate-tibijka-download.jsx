import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-download');
}

export default function LowrateTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-download" />;
}
