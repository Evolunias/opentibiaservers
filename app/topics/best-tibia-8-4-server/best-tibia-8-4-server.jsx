import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-8-4-server');
}

export default function BestTibia84ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-8-4-server" />;
}
