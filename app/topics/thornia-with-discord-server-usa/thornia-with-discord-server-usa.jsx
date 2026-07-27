import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-usa');
}

export default function ThorniaWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-usa" />;
}
