import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-south-america');
}

export default function PvpDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-south-america" />;
}
