import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-7-1-server');
}

export default function BestTibia71ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-7-1-server" />;
}
