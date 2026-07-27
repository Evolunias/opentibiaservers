import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-rules');
}

export default function FreshStartTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-rules" />;
}
