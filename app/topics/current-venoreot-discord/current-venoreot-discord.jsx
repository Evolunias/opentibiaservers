import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-discord');
}

export default function CurrentVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-discord" />;
}
