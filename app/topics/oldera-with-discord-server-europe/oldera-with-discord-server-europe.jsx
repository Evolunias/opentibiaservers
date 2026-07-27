import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-europe');
}

export default function OlderaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-europe" />;
}
