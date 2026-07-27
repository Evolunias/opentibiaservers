import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-guide');
}

export default function WithDiscordNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-guide" />;
}
