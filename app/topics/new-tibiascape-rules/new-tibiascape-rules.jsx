import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-rules');
}

export default function NewTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-rules" />;
}
