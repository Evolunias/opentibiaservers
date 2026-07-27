import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-europe');
}

export default function WithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-europe" />;
}
