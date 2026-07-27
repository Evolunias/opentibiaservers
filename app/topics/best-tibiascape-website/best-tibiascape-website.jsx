import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-website');
}

export default function BestTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-website" />;
}
