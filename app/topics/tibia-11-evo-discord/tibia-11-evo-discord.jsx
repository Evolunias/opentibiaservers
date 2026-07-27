import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-discord');
}

export default function Tibia11EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-discord" />;
}
