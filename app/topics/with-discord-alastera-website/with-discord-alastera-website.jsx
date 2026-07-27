import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-website');
}

export default function WithDiscordAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-website" />;
}
