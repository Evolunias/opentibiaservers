import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-tibia-private-server');
}

export default function Tibia81EvoTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-tibia-private-server" />;
}
