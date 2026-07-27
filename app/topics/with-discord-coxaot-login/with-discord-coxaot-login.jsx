import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-login');
}

export default function WithDiscordCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-login" />;
}
