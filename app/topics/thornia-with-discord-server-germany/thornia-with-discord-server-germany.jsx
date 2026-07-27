import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-germany');
}

export default function ThorniaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-germany" />;
}
