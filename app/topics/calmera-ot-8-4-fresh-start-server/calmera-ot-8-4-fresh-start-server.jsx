import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-fresh-start-server');
}

export default function CalmeraOt84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-fresh-start-server" />;
}
