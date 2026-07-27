import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-uk');
}

export default function PvpEnforcedDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-uk" />;
}
