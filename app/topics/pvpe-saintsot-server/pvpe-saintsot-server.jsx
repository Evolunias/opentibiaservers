import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-saintsot-server');
}

export default function PvpeSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-saintsot-server" />;
}
