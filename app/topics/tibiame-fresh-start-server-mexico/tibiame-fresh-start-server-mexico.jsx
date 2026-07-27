import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-mexico');
}

export default function TibiameFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-mexico" />;
}
