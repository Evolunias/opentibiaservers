import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-website');
}

export default function WithDiscordTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-website" />;
}
