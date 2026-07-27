import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-tibia-private-server');
}

export default function Tibia12FreshStartTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-tibia-private-server" />;
}
