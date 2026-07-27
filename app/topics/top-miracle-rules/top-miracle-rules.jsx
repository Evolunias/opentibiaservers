import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-rules');
}

export default function TopMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-rules" />;
}
