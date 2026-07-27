import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-12-server');
}

export default function BestTibia12ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-12-server" />;
}
