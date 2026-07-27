import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-tibia-private-server');
}

export default function Tibia84FreshStartTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-tibia-private-server" />;
}
