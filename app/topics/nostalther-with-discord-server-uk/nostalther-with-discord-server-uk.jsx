import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-uk');
}

export default function NostaltherWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-uk" />;
}
