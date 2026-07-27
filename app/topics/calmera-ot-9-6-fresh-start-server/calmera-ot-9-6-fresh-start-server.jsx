import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-9-6-fresh-start-server');
}

export default function CalmeraOt96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-9-6-fresh-start-server" />;
}
