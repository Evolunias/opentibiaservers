import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-germany');
}

export default function TibiantisWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-germany" />;
}
