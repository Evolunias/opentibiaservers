import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-rules');
}

export default function TopTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-rules" />;
}
