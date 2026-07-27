import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-south-america');
}

export default function EvoDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-south-america" />;
}
