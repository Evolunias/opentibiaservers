import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-latin-america');
}

export default function OriginaltibiaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-latin-america" />;
}
