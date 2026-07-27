import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-germany');
}

export default function PvpEnforcedDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-germany" />;
}
