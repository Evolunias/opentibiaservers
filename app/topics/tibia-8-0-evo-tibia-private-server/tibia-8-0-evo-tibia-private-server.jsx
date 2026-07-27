import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-tibia-private-server');
}

export default function Tibia80EvoTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-tibia-private-server" />;
}
