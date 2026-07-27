import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-fresh-start-server');
}

export default function Venoreot11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-fresh-start-server" />;
}
