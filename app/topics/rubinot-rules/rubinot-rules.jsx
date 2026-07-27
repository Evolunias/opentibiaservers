import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-rules');
}

export default function RubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="rubinot-rules" />;
}
