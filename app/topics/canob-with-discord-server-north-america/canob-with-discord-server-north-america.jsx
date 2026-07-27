import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-north-america');
}

export default function CanobWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-north-america" />;
}
