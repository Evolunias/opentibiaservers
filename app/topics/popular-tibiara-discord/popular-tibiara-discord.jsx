import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-discord');
}

export default function PopularTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-discord" />;
}
