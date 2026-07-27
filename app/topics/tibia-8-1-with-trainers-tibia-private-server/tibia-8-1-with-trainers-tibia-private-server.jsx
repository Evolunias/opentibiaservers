import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-trainers-tibia-private-server');
}

export default function Tibia81WithTrainersTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-trainers-tibia-private-server" />;
}
