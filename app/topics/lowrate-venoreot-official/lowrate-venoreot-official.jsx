import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-official');
}

export default function LowrateVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-official" />;
}
