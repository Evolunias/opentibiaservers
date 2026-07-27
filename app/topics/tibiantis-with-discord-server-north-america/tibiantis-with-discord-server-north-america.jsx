import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-north-america');
}

export default function TibiantisWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-north-america" />;
}
