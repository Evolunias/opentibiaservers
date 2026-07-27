import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-rules');
}

export default function LowrateAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-rules" />;
}
