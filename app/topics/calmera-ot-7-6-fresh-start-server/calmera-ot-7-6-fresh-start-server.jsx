import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-fresh-start-server');
}

export default function CalmeraOt76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-fresh-start-server" />;
}
