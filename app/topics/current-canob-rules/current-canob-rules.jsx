import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-rules');
}

export default function CurrentCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="current-canob-rules" />;
}
