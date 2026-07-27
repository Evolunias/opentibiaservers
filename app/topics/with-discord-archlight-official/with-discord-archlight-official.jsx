import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-official');
}

export default function WithDiscordArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-official" />;
}
