import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-rules');
}

export default function CustomTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-rules" />;
}
