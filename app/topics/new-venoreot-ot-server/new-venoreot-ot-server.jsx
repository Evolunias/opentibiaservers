import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-ot-server');
}

export default function NewVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-ot-server" />;
}
