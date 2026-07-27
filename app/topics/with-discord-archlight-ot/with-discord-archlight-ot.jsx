import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-ot');
}

export default function WithDiscordArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-ot" />;
}
