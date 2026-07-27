import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-north-america');
}

export default function OriginaltibiaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-north-america" />;
}
