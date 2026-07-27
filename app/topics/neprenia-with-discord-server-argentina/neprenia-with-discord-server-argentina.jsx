import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-argentina');
}

export default function NepreniaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-argentina" />;
}
