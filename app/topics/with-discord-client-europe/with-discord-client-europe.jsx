import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-europe');
}

export default function WithDiscordClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-europe" />;
}
