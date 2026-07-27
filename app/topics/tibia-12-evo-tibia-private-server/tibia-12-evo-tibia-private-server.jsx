import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-evo-tibia-private-server');
}

export default function Tibia12EvoTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-evo-tibia-private-server" />;
}
