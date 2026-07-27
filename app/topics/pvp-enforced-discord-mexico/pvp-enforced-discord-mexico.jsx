import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-mexico');
}

export default function PvpEnforcedDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-mexico" />;
}
