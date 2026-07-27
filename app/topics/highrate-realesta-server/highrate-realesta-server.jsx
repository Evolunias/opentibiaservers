import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-server');
}

export default function HighrateRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-server" />;
}
