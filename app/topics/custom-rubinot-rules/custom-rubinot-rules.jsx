import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-rules');
}

export default function CustomRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-rules" />;
}
