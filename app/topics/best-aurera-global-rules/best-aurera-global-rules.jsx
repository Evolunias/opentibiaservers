import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-rules');
}

export default function BestAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-rules" />;
}
