import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-discord');
}

export default function Tibia772EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-discord" />;
}
