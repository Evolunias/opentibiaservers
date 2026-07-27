import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-mexico');
}

export default function CanobWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-mexico" />;
}
