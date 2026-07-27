import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-carlinot-server');
}

export default function PvpeCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-carlinot-server" />;
}
