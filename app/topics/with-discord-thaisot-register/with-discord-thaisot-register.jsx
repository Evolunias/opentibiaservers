import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-register');
}

export default function WithDiscordThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-register" />;
}
