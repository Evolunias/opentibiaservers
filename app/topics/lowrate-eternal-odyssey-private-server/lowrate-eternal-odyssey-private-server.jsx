import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-private-server');
}

export default function LowrateEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-private-server" />;
}
