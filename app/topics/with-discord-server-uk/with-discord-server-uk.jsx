import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-uk');
}

export default function WithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-uk" />;
}
