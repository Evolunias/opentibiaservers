import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-venoreot-server');
}

export default function HighExpVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-venoreot-server" />;
}
