import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-discord-server-north-america');
}

export default function DuraOnlineWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-discord-server-north-america" />;
}
