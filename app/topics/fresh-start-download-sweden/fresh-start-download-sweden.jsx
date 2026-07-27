import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-sweden');
}

export default function FreshStartDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-sweden" />;
}
