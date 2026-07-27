import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-mexico');
}

export default function RealestaWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-mexico" />;
}
