import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-latin-america');
}

export default function EvoDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-download-latin-america" />;
}
