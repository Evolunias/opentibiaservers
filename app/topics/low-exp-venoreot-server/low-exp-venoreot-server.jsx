import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-venoreot-server');
}

export default function LowExpVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-venoreot-server" />;
}
