import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-europe');
}

export default function ThorniaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-europe" />;
}
