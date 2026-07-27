import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-rules');
}

export default function BestTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-rules" />;
}
