import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-latin-america');
}

export default function WithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-latin-america" />;
}
