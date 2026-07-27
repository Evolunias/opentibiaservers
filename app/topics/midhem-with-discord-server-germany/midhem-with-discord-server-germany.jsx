import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-germany');
}

export default function MidhemWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-germany" />;
}
