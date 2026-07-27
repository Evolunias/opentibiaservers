import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-official');
}

export default function HighrateVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-official" />;
}
