import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-private-server');
}

export default function LowrateNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-private-server" />;
}
