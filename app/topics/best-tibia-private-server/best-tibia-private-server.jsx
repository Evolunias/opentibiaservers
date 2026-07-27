import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-private-server');
}

export default function BestTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-private-server" />;
}
