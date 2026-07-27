import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-register');
}

export default function WithDiscordCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-register" />;
}
