import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-official');
}

export default function WithDiscordRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-official" />;
}
