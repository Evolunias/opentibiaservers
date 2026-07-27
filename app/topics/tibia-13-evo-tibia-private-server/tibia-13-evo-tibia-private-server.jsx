import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-tibia-private-server');
}

export default function Tibia13EvoTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-tibia-private-server" />;
}
