import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-download');
}

export default function LowrateAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-download" />;
}
