import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-france-server');
}

export default function TibiameFranceServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-france-server" />;
}
