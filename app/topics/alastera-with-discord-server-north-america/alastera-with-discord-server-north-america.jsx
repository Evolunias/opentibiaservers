import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-north-america');
}

export default function AlasteraWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-north-america" />;
}
