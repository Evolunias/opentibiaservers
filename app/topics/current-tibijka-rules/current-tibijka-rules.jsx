import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-rules');
}

export default function CurrentTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-rules" />;
}
