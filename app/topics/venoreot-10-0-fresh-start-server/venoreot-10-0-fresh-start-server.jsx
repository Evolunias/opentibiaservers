import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-fresh-start-server');
}

export default function Venoreot100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-fresh-start-server" />;
}
