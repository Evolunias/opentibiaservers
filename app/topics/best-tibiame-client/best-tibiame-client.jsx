import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-client');
}

export default function BestTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-client" />;
}
