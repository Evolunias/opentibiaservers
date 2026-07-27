import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera');
}

export default function WithDiscordAlasteraKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera" />;
}
