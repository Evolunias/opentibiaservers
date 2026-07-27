import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-rules');
}

export default function ActiveTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-rules" />;
}
