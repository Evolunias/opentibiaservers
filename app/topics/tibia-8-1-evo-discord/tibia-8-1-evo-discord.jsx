import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-discord');
}

export default function Tibia81EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-discord" />;
}
