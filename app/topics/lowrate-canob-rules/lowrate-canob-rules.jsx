import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-rules');
}

export default function LowrateCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-rules" />;
}
