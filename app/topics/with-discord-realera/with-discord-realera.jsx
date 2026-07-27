import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera');
}

export default function WithDiscordRealeraKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera" />;
}
