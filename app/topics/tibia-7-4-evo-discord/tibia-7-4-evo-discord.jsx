import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-discord');
}

export default function Tibia74EvoDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-discord" />;
}
