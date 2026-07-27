import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-open-tibia-server');
}

export default function Tibia15RetroOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-open-tibia-server" />;
}
