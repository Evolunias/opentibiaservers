import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-north-america');
}

export default function ElderaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-north-america" />;
}
