import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-argentina');
}

export default function ThorniaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-argentina" />;
}
