import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-mexico');
}

export default function RealeraWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-mexico" />;
}
