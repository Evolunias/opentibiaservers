import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-6-fresh-start-server');
}

export default function Carlinot76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-6-fresh-start-server" />;
}
