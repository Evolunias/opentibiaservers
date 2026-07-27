import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-15-server');
}

export default function BestTibia15ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-15-server" />;
}
