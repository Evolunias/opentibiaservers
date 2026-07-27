import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-download');
}

export default function FreshStartUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-download" />;
}
