import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-server');
}

export default function HighrateNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-server" />;
}
