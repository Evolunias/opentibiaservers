import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-rules');
}

export default function CurrentMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-rules" />;
}
