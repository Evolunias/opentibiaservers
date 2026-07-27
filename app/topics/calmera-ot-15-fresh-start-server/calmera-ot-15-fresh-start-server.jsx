import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-fresh-start-server');
}

export default function CalmeraOt15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-fresh-start-server" />;
}
