import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-rules');
}

export default function PopularOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-rules" />;
}
