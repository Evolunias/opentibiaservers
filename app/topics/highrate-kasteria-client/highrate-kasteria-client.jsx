import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-client');
}

export default function HighrateKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-client" />;
}
