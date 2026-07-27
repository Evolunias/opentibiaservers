import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-7-72-server');
}

export default function BestTibia772ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-7-72-server" />;
}
