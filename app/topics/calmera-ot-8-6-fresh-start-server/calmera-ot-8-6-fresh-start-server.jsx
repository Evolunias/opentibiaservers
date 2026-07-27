import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-6-fresh-start-server');
}

export default function CalmeraOt86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-6-fresh-start-server" />;
}
