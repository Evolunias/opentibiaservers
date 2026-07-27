import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-mexico');
}

export default function WithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-mexico" />;
}
