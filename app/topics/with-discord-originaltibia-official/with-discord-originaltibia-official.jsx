import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-official');
}

export default function WithDiscordOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-official" />;
}
