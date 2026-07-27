import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-rules');
}

export default function FreshStartCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-rules" />;
}
