import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-south-america');
}

export default function EvoDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-download-south-america" />;
}
