import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-tibia-private-server');
}

export default function Tibia81FreshStartTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-tibia-private-server" />;
}
