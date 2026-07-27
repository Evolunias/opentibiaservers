import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-official');
}

export default function WithDiscordNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-official" />;
}
