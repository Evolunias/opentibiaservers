import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-brazil');
}

export default function FreshStartDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-brazil" />;
}
