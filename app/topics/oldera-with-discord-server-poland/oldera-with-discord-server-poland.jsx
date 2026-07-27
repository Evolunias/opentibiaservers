import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-poland');
}

export default function OlderaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-poland" />;
}
