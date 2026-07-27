import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-uk');
}

export default function OriginaltibiaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-uk" />;
}
