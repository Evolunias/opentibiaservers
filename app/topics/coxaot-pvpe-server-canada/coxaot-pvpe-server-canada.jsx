import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-canada');
}

export default function CoxaotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-canada" />;
}
