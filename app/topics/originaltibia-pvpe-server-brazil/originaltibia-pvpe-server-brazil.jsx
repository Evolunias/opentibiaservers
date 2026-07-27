import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-brazil');
}

export default function OriginaltibiaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-brazil" />;
}
