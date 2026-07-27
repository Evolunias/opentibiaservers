import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fresh-start-server-brazil');
}

export default function DemolidoresFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fresh-start-server-brazil" />;
}
