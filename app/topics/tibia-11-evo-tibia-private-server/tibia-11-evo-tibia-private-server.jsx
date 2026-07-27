import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-tibia-private-server');
}

export default function Tibia11EvoTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-tibia-private-server" />;
}
