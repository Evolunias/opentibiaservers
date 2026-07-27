import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-fresh-start-server');
}

export default function CalmeraOt100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-fresh-start-server" />;
}
