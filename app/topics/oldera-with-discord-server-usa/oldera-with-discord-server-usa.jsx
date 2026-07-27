import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-usa');
}

export default function OlderaWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-usa" />;
}
