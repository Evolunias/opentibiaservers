import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-uk');
}

export default function RealeraWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-uk" />;
}
