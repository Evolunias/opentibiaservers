import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-guide');
}

export default function WithDiscordAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-guide" />;
}
