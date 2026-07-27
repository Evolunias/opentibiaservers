import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-canada');
}

export default function OlderaWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-canada" />;
}
