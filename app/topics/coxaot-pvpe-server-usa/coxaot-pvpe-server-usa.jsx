import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-usa');
}

export default function CoxaotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-usa" />;
}
