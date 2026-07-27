import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-rules');
}

export default function CurrentTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-rules" />;
}
