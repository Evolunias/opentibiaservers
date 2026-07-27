import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-brazil');
}

export default function EvoDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-download-brazil" />;
}
