import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-discord');
}

export default function PopularSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-discord" />;
}
