import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-canada');
}

export default function NilotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-canada" />;
}
