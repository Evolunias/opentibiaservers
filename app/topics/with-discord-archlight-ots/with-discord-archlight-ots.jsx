import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-ots');
}

export default function WithDiscordArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-ots" />;
}
