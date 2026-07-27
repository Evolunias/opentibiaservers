import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-canada');
}

export default function FreshStartDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-canada" />;
}
