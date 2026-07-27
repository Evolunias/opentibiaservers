import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-rules');
}

export default function TopImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-rules" />;
}
