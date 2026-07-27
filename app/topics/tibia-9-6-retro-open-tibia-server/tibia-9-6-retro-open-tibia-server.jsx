import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-open-tibia-server');
}

export default function Tibia96RetroOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-open-tibia-server" />;
}
