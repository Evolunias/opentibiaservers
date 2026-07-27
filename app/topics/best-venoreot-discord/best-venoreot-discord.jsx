import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-discord');
}

export default function BestVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-discord" />;
}
