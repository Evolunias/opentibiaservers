import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-fresh-start-server');
}

export default function Venoreot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-fresh-start-server" />;
}
