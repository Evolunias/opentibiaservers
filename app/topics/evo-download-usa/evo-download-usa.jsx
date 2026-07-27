import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-usa');
}

export default function EvoDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-download-usa" />;
}
