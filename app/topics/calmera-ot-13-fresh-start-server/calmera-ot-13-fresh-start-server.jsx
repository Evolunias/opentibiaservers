import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-fresh-start-server');
}

export default function CalmeraOt13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-fresh-start-server" />;
}
