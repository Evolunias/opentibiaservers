import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-private-server');
}

export default function PopularRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-private-server" />;
}
