import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-official');
}

export default function WithDiscordMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-official" />;
}
