import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape');
}

export default function BestTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape" />;
}
