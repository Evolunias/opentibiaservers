import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-rules');
}

export default function BestMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-rules" />;
}
