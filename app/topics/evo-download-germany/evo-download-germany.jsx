import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-germany');
}

export default function EvoDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-download-germany" />;
}
