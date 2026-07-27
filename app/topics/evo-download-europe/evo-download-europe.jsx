import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-europe');
}

export default function EvoDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-download-europe" />;
}
