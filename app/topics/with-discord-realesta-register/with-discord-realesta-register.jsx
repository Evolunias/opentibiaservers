import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-register');
}

export default function WithDiscordRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-register" />;
}
