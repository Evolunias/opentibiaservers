import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-tibia-private-server');
}

export default function Tibia13FreshStartTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-tibia-private-server" />;
}
