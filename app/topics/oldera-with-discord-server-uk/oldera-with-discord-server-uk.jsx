import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-uk');
}

export default function OlderaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-uk" />;
}
