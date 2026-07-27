import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-private-server');
}

export default function LowrateNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-private-server" />;
}
