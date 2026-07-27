import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-south-america');
}

export default function NonPvpDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-south-america" />;
}
