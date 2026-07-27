import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-uk');
}

export default function TibiameFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-uk" />;
}
