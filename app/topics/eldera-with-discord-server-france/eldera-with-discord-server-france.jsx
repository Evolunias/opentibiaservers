import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-france');
}

export default function ElderaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-france" />;
}
