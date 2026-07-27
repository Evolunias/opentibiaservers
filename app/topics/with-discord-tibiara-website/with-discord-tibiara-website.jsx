import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-website');
}

export default function WithDiscordTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-website" />;
}
