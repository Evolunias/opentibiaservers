import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server');
}

export default function TibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server" />;
}
