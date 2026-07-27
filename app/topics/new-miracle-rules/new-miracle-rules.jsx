import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-rules');
}

export default function NewMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-rules" />;
}
