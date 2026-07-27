import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-private-server');
}

export default function TopEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-private-server" />;
}
