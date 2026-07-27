import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-germany');
}

export default function PvpDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-germany" />;
}
