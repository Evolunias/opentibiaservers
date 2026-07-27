import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-north-america');
}

export default function NepreniaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-north-america" />;
}
