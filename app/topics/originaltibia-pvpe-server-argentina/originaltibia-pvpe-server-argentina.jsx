import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-argentina');
}

export default function OriginaltibiaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-argentina" />;
}
