import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-discord');
}

export default function Tibia15EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-discord" />;
}
