import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-sweden');
}

export default function EvoTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-sweden" />;
}
