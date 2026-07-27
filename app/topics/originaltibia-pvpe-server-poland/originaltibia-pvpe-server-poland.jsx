import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-poland');
}

export default function OriginaltibiaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-poland" />;
}
