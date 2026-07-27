import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-argentina');
}

export default function RealestaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-argentina" />;
}
