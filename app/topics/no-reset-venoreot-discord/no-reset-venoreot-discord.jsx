import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-discord');
}

export default function NoResetVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-discord" />;
}
