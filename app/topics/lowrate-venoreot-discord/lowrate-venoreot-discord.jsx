import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-discord');
}

export default function LowrateVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-discord" />;
}
