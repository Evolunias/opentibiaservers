import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-register');
}

export default function WithDiscordCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-register" />;
}
