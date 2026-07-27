import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-7-6-server');
}

export default function BestTibia76ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-7-6-server" />;
}
