import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-rules');
}

export default function ActiveRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-rules" />;
}
