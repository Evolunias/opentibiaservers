import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-fresh-start-server');
}

export default function CalmeraOt12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-fresh-start-server" />;
}
