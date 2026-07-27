import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-9-6-server');
}

export default function BestTibia96ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-9-6-server" />;
}
