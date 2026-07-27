import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-login');
}

export default function WithDiscordTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-login" />;
}
