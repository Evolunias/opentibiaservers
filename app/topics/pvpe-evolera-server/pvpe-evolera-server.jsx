import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-evolera-server');
}

export default function PvpeEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-evolera-server" />;
}
