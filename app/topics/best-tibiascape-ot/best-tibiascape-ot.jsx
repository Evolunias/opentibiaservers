import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-ot');
}

export default function BestTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-ot" />;
}
