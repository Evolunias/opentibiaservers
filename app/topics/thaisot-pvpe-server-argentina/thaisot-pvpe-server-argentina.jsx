import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-argentina');
}

export default function ThaisotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-argentina" />;
}
