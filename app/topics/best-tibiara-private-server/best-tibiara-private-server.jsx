import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-private-server');
}

export default function BestTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-private-server" />;
}
