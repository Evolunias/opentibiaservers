import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-france');
}

export default function TibiameFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-france" />;
}
