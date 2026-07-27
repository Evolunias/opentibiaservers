import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-south-america');
}

export default function PvpeDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-south-america" />;
}
