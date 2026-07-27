import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-register');
}

export default function WithDiscordMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-register" />;
}
