import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-open-tibia-server');
}

export default function Tibia74RetroOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-open-tibia-server" />;
}
