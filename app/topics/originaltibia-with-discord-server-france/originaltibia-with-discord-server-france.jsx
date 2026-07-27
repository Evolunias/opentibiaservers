import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-discord-server-france');
}

export default function OriginaltibiaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-discord-server-france" />;
}
