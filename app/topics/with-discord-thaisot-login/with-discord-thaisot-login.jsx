import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-login');
}

export default function WithDiscordThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-login" />;
}
