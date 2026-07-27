import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-official');
}

export default function WithDiscordMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-official" />;
}
