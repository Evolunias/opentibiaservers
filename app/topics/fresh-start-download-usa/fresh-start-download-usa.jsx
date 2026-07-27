import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-usa');
}

export default function FreshStartDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-usa" />;
}
