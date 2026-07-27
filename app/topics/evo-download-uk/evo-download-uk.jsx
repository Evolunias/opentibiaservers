import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-uk');
}

export default function EvoDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="evo-download-uk" />;
}
