import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-fresh-start-server');
}

export default function Carlinot81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-fresh-start-server" />;
}
