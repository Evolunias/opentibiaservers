import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores');
}

export default function WithDiscordDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores" />;
}
