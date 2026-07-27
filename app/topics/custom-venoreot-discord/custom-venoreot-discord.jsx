import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-discord');
}

export default function CustomVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-discord" />;
}
