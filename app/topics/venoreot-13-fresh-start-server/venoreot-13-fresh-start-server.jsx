import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-fresh-start-server');
}

export default function Venoreot13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-fresh-start-server" />;
}
