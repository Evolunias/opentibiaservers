import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-guide');
}

export default function WithDiscordOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-guide" />;
}
