import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-germany');
}

export default function NostaltherWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-germany" />;
}
