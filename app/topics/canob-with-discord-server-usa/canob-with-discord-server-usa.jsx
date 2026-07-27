import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-usa');
}

export default function CanobWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-usa" />;
}
