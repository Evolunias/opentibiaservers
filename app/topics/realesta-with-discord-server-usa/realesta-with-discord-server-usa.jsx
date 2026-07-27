import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-usa');
}

export default function RealestaWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-usa" />;
}
