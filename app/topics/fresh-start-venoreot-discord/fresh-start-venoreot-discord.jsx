import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-discord');
}

export default function FreshStartVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-discord" />;
}
