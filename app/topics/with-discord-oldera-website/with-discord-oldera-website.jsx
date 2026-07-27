import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-website');
}

export default function WithDiscordOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-website" />;
}
