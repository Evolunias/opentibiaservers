import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-discord-server-france');
}

export default function DuraOnlineWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-discord-server-france" />;
}
