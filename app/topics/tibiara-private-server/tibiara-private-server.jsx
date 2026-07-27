import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-private-server');
}

export default function TibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-private-server" />;
}
