import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-uk');
}

export default function ThaisotWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-uk" />;
}
