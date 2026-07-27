import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-brazil');
}

export default function PvpEnforcedDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-brazil" />;
}
