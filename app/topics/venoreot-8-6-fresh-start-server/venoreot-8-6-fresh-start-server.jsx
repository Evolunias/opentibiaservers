import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-6-fresh-start-server');
}

export default function Venoreot86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-6-fresh-start-server" />;
}
