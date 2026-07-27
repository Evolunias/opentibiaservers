import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-10-0-server');
}

export default function BestTibia100ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-10-0-server" />;
}
