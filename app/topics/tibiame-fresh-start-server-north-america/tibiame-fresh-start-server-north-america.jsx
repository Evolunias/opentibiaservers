import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-north-america');
}

export default function TibiameFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-north-america" />;
}
