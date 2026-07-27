import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-login');
}

export default function WithDiscordClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-login" />;
}
