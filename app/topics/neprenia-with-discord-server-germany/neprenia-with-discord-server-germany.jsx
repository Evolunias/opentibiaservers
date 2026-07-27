import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-germany');
}

export default function NepreniaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-germany" />;
}
