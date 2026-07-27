import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-rules');
}

export default function ImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="imperianic-rules" />;
}
