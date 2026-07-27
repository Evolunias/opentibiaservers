import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-ot');
}

export default function NewVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-ot" />;
}
