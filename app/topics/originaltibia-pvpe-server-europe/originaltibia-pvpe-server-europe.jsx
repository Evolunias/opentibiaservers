import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-europe');
}

export default function OriginaltibiaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-europe" />;
}
