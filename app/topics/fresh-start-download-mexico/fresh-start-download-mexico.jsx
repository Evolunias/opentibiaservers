import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-mexico');
}

export default function FreshStartDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-mexico" />;
}
