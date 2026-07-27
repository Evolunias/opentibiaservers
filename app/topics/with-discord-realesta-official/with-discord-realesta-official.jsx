import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-official');
}

export default function WithDiscordRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-official" />;
}
