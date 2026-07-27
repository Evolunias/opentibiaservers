import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-login');
}

export default function WithDiscordRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-login" />;
}
