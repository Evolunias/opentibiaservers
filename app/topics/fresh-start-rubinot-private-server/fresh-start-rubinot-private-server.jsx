import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-private-server');
}

export default function FreshStartRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-private-server" />;
}
