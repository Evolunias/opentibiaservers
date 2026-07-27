import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-evo-discord');
}

export default function Tibia86EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-evo-discord" />;
}
