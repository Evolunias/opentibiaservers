import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-rules');
}

export default function LowrateImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-rules" />;
}
