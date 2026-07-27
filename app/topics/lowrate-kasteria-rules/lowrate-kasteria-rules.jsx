import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-rules');
}

export default function LowrateKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-rules" />;
}
