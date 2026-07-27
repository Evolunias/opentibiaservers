import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-thaisot-server');
}

export default function PvpeThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-thaisot-server" />;
}
