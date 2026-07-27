import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-website');
}

export default function WithDiscordOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-website" />;
}
