import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-official');
}

export default function WithDiscordBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-official" />;
}
