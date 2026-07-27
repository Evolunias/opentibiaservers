import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-europe');
}

export default function MidhemWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-europe" />;
}
