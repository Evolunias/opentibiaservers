import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-usa');
}

export default function ThaisotWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-usa" />;
}
