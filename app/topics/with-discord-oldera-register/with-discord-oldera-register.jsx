import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-register');
}

export default function WithDiscordOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-register" />;
}
