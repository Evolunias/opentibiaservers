import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-download');
}

export default function FreshStartImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-download" />;
}
