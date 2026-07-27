import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-discord');
}

export default function TopVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-discord" />;
}
