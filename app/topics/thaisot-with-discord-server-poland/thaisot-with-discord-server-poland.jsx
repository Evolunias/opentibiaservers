import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-poland');
}

export default function ThaisotWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-poland" />;
}
