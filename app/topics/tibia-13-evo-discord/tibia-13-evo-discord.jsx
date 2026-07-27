import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-discord');
}

export default function Tibia13EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-discord" />;
}
