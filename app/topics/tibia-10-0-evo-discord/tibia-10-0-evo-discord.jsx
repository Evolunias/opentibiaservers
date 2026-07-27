import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-discord');
}

export default function Tibia100EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-discord" />;
}
