import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-client');
}

export default function HighrateTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-client" />;
}
