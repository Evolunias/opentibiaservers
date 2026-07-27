import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-rules');
}

export default function PopularTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-rules" />;
}
