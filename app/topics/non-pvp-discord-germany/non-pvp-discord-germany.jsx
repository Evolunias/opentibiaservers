import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-germany');
}

export default function NonPvpDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-germany" />;
}
