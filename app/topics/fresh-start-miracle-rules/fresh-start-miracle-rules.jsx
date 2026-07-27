import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-rules');
}

export default function FreshStartMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-rules" />;
}
