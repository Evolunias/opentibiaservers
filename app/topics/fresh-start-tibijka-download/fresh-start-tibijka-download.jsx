import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-download');
}

export default function FreshStartTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-download" />;
}
