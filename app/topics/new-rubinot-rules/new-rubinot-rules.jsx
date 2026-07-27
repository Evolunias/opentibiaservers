import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-rules');
}

export default function NewRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-rules" />;
}
