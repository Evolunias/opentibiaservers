import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-uk');
}

export default function ThorniaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-uk" />;
}
