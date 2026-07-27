import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-rules');
}

export default function BestTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-rules" />;
}
