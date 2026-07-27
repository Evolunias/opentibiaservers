import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-canada');
}

export default function TibiameFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-canada" />;
}
