import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-website');
}

export default function WithDiscordNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-website" />;
}
