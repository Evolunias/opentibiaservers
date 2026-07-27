import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-server');
}

export default function HighrateRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-server" />;
}
