import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-client');
}

export default function WithDiscordImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-client" />;
}
