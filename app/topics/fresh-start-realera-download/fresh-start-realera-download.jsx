import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-download');
}

export default function FreshStartRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-download" />;
}
