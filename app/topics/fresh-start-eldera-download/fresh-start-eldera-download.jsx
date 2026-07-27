import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-download');
}

export default function FreshStartElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-download" />;
}
