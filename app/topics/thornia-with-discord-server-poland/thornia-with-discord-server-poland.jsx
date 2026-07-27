import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-poland');
}

export default function ThorniaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-poland" />;
}
