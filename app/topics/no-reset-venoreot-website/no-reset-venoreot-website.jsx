import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-website');
}

export default function NoResetVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-website" />;
}
