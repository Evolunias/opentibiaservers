import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-argentina');
}

export default function UnlinePvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-argentina" />;
}
