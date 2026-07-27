import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-mexico');
}

export default function WithDiscordClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-mexico" />;
}
