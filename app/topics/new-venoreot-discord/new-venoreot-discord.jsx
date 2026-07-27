import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-discord');
}

export default function NewVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-discord" />;
}
