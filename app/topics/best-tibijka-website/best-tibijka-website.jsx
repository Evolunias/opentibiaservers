import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-website');
}

export default function BestTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-website" />;
}
