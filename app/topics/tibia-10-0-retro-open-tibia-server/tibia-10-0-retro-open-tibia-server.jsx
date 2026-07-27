import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-open-tibia-server');
}

export default function Tibia100RetroOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-open-tibia-server" />;
}
