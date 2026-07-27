import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-latin-america');
}

export default function WithDiscordServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-latin-america" />;
}
