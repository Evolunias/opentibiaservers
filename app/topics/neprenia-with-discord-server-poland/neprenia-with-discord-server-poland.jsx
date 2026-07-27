import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-poland');
}

export default function NepreniaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-poland" />;
}
