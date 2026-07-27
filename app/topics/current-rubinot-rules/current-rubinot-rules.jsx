import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-rules');
}

export default function CurrentRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-rules" />;
}
