import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-rules');
}

export default function HighrateTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-rules" />;
}
