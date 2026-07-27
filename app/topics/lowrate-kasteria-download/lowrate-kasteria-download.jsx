import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-download');
}

export default function LowrateKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-download" />;
}
