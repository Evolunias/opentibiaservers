import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-usa');
}

export default function NepreniaWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-usa" />;
}
