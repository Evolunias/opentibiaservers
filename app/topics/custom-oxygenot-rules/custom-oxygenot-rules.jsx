import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-rules');
}

export default function CustomOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-rules" />;
}
