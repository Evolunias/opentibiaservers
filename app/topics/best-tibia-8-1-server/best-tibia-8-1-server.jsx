import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-8-1-server');
}

export default function BestTibia81ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-8-1-server" />;
}
