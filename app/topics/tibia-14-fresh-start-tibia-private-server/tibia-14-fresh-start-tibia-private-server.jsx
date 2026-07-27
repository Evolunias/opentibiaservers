import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-tibia-private-server');
}

export default function Tibia14FreshStartTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-tibia-private-server" />;
}
