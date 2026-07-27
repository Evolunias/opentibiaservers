import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-argentina');
}

export default function PvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-argentina" />;
}
