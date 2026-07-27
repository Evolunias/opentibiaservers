import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-website');
}

export default function WithDiscordRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-website" />;
}
