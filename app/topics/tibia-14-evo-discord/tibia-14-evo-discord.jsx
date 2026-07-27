import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-discord');
}

export default function Tibia14EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-discord" />;
}
