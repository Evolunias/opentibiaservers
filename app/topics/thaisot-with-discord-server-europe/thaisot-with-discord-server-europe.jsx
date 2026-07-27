import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-europe');
}

export default function ThaisotWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-europe" />;
}
