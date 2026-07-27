import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-ot-server');
}

export default function NewSeasonVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-ot-server" />;
}
