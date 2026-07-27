import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-website');
}

export default function WithDiscordBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-website" />;
}
