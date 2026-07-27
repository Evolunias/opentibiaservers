import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-ots');
}

export default function BestTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-ots" />;
}
