import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-canada');
}

export default function EvoDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-download-canada" />;
}
