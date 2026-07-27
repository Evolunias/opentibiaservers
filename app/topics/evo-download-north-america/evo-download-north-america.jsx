import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-north-america');
}

export default function EvoDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-download-north-america" />;
}
