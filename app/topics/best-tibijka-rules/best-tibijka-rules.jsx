import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-rules');
}

export default function BestTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-rules" />;
}
