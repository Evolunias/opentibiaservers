import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-official');
}

export default function WithDiscordTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-official" />;
}
