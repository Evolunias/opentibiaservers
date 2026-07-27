import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-rules');
}

export default function OfficialOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-rules" />;
}
