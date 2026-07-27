import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-client');
}

export default function Tibia80PvpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-client" />;
}
