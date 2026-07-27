import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-mexico');
}

export default function ThaisotWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-mexico" />;
}
