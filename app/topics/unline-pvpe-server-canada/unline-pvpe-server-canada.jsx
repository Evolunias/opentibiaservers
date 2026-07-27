import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-canada');
}

export default function UnlinePvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-canada" />;
}
