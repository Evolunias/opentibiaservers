import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-discord');
}

export default function PopularTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-discord" />;
}
