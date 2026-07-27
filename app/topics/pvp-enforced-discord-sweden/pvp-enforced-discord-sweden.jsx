import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-sweden');
}

export default function PvpEnforcedDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-sweden" />;
}
