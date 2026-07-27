import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-rules');
}

export default function TopCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="top-canob-rules" />;
}
