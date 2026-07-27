import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-argentina');
}

export default function OlderaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-argentina" />;
}
