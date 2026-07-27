import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-open-tibia-server');
}

export default function Tibia80PvpeOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-open-tibia-server" />;
}
