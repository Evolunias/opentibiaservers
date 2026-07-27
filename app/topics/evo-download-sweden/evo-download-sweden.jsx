import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-sweden');
}

export default function EvoDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-download-sweden" />;
}
