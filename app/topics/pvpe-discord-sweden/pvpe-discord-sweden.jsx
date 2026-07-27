import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-sweden');
}

export default function PvpeDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-sweden" />;
}
