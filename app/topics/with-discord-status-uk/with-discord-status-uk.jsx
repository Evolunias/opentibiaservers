import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-uk');
}

export default function WithDiscordStatusUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-uk" />;
}
