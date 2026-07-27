import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-rules');
}

export default function CustomMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-rules" />;
}
