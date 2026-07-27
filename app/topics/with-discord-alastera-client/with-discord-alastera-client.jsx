import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-client');
}

export default function WithDiscordAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-client" />;
}
