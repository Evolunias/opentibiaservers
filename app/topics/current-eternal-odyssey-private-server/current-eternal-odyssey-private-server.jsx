import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-private-server');
}

export default function CurrentEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-private-server" />;
}
