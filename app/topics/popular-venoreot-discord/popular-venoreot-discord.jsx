import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-discord');
}

export default function PopularVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-discord" />;
}
