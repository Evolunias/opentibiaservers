import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-login');
}

export default function WithDiscordImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-login" />;
}
