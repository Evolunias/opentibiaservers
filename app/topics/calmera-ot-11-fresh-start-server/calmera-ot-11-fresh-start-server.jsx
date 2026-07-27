import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-fresh-start-server');
}

export default function CalmeraOt11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-fresh-start-server" />;
}
