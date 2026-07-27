import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-europe');
}

export default function WithDiscordStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-europe" />;
}
