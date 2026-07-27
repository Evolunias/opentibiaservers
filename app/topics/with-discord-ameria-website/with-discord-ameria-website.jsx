import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-website');
}

export default function WithDiscordAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-website" />;
}
