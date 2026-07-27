import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-uk');
}

export default function TibiamePvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-uk" />;
}
