import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-uk');
}

export default function NepreniaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-uk" />;
}
