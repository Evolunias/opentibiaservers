import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-brazil');
}

export default function ThorniaWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-brazil" />;
}
