import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-download');
}

export default function FreshStartRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-download" />;
}
