import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-login');
}

export default function WithDiscordAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-login" />;
}
