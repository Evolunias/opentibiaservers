import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-fresh-start-server');
}

export default function CalmeraOt14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-fresh-start-server" />;
}
