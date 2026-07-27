import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-usa');
}

export default function RealeraWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-usa" />;
}
