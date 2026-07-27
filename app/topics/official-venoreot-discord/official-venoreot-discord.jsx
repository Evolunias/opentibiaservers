import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-discord');
}

export default function OfficialVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-discord" />;
}
