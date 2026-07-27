import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-rules');
}

export default function PopularMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-rules" />;
}
