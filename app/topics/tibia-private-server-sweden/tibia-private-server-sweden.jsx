import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-sweden');
}

export default function TibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-sweden" />;
}
