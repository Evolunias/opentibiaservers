import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-germany');
}

export default function TibiameFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-germany" />;
}
