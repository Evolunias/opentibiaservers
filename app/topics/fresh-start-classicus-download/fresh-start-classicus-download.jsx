import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-download');
}

export default function FreshStartClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-download" />;
}
