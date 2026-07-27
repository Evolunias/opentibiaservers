import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-register');
}

export default function WithDiscordTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-register" />;
}
