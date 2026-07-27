import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-rules');
}

export default function LowrateTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-rules" />;
}
