import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-argentina');
}

export default function EvoDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-download-argentina" />;
}
