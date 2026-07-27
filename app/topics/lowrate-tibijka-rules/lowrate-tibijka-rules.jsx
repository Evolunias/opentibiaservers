import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-rules');
}

export default function LowrateTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-rules" />;
}
