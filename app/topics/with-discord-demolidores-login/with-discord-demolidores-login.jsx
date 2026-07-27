import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-login');
}

export default function WithDiscordDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-login" />;
}
