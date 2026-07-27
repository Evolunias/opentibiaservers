import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-usa');
}

export default function WithDiscordRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-usa" />;
}
