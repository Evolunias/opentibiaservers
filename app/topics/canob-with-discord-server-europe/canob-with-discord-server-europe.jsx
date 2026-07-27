import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-europe');
}

export default function CanobWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-europe" />;
}
