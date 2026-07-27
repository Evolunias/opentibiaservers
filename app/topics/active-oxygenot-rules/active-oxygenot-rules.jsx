import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-rules');
}

export default function ActiveOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-rules" />;
}
