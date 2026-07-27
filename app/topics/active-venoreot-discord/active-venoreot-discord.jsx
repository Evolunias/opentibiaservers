import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-discord');
}

export default function ActiveVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-discord" />;
}
