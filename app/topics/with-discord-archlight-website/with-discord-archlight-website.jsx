import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-website');
}

export default function WithDiscordArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-website" />;
}
