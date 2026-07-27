import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-canada');
}

export default function PvpEnforcedDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-canada" />;
}
