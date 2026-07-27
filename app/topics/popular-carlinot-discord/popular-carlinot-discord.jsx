import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-discord');
}

export default function PopularCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-discord" />;
}
