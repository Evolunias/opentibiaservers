import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-brazil');
}

export default function AlasteraFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-brazil" />;
}
