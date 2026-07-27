import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-discord');
}

export default function NewSeasonVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-discord" />;
}
