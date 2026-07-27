import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-latin-america');
}

export default function WithDiscordClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-latin-america" />;
}
