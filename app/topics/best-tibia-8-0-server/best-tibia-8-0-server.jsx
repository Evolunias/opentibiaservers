import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-8-0-server');
}

export default function BestTibia80ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-8-0-server" />;
}
