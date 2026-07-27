import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-latin-america');
}

export default function WithDiscordServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-latin-america" />;
}
