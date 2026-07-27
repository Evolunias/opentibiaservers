import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-tibia-private-server');
}

export default function Tibia100FreshStartTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-tibia-private-server" />;
}
