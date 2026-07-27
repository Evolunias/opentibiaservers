import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-rules');
}

export default function BestTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-rules" />;
}
