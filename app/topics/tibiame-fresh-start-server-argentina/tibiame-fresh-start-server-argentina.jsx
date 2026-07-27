import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-argentina');
}

export default function TibiameFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-argentina" />;
}
