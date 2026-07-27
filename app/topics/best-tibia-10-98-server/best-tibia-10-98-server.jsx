import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-10-98-server');
}

export default function BestTibia1098ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-10-98-server" />;
}
