import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-guide');
}

export default function WithDiscordArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-guide" />;
}
