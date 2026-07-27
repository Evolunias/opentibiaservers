import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-register');
}

export default function WithDiscordTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-register" />;
}
