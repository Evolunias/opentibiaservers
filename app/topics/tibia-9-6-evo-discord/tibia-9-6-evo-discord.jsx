import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-discord');
}

export default function Tibia96EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-discord" />;
}
