import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-client');
}

export default function WithDiscordRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-client" />;
}
