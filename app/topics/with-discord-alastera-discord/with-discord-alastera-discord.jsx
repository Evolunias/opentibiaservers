import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-discord');
}

export default function WithDiscordAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-discord" />;
}
