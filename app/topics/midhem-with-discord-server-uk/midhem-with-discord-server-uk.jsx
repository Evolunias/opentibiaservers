import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-uk');
}

export default function MidhemWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-uk" />;
}
