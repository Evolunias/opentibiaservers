import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-rules');
}

export default function PopularCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-rules" />;
}
