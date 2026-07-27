import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-rules');
}

export default function MiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="miracle-rules" />;
}
