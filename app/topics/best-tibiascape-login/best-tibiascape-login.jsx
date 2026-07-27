import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-login');
}

export default function BestTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-login" />;
}
