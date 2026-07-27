import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-germany');
}

export default function CoxaotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-germany" />;
}
