import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-register-mexico');
}

export default function WithDiscordRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-register-mexico" />;
}
