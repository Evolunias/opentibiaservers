import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-website');
}

export default function WithDiscordNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-website" />;
}
