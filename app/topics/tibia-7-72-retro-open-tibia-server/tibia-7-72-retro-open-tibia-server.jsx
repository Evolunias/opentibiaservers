import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-open-tibia-server');
}

export default function Tibia772RetroOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-open-tibia-server" />;
}
