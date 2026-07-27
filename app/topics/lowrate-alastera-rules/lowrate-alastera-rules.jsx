import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-rules');
}

export default function LowrateAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-rules" />;
}
