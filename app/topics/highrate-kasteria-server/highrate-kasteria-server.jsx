import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-server');
}

export default function HighrateKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-server" />;
}
