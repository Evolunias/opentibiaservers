import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-uk');
}

export default function WithDiscordClientUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-uk" />;
}
