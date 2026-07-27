import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-mexico');
}

export default function NepreniaWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-mexico" />;
}
