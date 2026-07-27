import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-website');
}

export default function WithDiscordImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-website" />;
}
