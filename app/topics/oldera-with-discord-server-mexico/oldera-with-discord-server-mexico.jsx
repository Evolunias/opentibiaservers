import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-mexico');
}

export default function OlderaWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-mexico" />;
}
