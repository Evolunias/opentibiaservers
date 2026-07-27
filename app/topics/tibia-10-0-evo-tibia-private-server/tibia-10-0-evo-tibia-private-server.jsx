import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-tibia-private-server');
}

export default function Tibia100EvoTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-tibia-private-server" />;
}
