import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-login');
}

export default function WithDiscordTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-login" />;
}
