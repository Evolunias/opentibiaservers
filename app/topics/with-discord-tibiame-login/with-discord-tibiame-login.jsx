import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-login');
}

export default function WithDiscordTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-login" />;
}
