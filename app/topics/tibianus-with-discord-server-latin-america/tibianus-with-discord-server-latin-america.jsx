import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-latin-america');
}

export default function TibianusWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-latin-america" />;
}
