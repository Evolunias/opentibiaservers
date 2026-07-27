import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-rules');
}

export default function CurrentImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-rules" />;
}
