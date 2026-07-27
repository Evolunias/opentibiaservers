import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-download');
}

export default function TopTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-download" />;
}
