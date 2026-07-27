import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-germany');
}

export default function OlderaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-germany" />;
}
