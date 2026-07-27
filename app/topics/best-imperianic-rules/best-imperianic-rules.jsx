import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-rules');
}

export default function BestImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-rules" />;
}
