import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-fresh-start-server');
}

export default function CalmeraOt71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-fresh-start-server" />;
}
