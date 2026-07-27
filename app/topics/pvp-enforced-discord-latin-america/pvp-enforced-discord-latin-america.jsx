import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-latin-america');
}

export default function PvpEnforcedDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-latin-america" />;
}
