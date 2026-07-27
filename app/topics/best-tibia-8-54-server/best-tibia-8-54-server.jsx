import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-8-54-server');
}

export default function BestTibia854ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-8-54-server" />;
}
