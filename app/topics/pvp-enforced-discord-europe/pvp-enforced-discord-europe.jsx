import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-europe');
}

export default function PvpEnforcedDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-europe" />;
}
