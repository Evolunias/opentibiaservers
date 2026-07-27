import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-official');
}

export default function WithDiscordOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-official" />;
}
