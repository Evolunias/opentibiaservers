import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-fresh-start-server');
}

export default function Venoreot14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-fresh-start-server" />;
}
