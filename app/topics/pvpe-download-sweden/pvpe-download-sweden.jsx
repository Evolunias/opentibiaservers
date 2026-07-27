import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-sweden');
}

export default function PvpeDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-sweden" />;
}
