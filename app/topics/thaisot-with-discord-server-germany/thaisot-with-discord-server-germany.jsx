import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-germany');
}

export default function ThaisotWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-germany" />;
}
