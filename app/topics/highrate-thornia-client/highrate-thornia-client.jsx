import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-client');
}

export default function HighrateThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-client" />;
}
