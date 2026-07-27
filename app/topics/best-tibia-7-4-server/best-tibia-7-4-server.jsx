import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-7-4-server');
}

export default function BestTibia74ServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-7-4-server" />;
}
