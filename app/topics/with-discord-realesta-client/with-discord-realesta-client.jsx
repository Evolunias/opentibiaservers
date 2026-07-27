import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-client');
}

export default function WithDiscordRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-client" />;
}
