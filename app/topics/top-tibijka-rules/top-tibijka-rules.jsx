import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-rules');
}

export default function TopTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-rules" />;
}
