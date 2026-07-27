import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-rules');
}

export default function HighrateTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-rules" />;
}
