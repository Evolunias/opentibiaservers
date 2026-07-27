import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-germany');
}

export default function CanobWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-germany" />;
}
