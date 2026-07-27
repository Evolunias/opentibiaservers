import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-poland');
}

export default function EvoDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-download-poland" />;
}
