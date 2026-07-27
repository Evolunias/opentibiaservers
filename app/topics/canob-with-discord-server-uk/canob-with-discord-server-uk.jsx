import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-uk');
}

export default function CanobWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-uk" />;
}
