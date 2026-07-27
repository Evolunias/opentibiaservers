import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-rules');
}

export default function TibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-rules" />;
}
