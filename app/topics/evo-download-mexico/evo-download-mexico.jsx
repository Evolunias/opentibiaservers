import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-mexico');
}

export default function EvoDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-download-mexico" />;
}
