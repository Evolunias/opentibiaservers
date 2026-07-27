import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-usa');
}

export default function OriginaltibiaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-usa" />;
}
