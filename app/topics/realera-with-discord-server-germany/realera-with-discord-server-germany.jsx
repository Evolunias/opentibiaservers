import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-germany');
}

export default function RealeraWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-germany" />;
}
