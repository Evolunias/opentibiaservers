import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-fresh-start-server');
}

export default function Venoreot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-fresh-start-server" />;
}
