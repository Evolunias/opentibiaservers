import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-uk');
}

export default function RealestaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-uk" />;
}
