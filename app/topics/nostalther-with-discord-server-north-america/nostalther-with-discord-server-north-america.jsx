import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-north-america');
}

export default function NostaltherWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-north-america" />;
}
