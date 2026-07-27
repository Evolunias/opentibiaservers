import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-register');
}

export default function WithDiscordSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-register" />;
}
