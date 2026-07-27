import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-guide');
}

export default function WithDiscordSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-guide" />;
}
