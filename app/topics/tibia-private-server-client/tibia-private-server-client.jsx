import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-client');
}

export default function TibiaPrivateServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-client" />;
}
