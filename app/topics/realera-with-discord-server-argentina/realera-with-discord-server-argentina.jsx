import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-argentina');
}

export default function RealeraWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-argentina" />;
}
