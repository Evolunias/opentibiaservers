import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-register');
}

export default function WithDiscordTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-register" />;
}
