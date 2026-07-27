import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-france-servers');
}

export default function TibiameFranceServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-france-servers" />;
}
