import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-latin-america');
}

export default function TibiameFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-latin-america" />;
}
