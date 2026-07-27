import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-brazil');
}

export default function TibiameFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-brazil" />;
}
