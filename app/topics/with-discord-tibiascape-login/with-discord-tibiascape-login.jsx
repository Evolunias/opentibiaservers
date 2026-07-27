import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-login');
}

export default function WithDiscordTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-login" />;
}
