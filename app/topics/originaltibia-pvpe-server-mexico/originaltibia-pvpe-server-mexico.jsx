import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-mexico');
}

export default function OriginaltibiaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-mexico" />;
}
