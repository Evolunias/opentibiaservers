import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-login');
}

export default function NewSeasonVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-login" />;
}
