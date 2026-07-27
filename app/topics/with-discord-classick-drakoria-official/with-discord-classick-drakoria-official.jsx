import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-official');
}

export default function WithDiscordClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-official" />;
}
