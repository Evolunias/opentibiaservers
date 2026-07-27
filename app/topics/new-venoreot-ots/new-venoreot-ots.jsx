import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-ots');
}

export default function NewVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-ots" />;
}
