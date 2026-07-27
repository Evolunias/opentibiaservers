import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ranger-s-arcani-server');
}

export default function PvpeRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ranger-s-arcani-server" />;
}
