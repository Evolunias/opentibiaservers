import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-poland');
}

export default function TibiameFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-poland" />;
}
