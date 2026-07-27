import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-11-server');
}

export default function BestTibia11ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-11-server" />;
}
