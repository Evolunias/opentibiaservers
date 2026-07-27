import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-download');
}

export default function PopularCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-download" />;
}
