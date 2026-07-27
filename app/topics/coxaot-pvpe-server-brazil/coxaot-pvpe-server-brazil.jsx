import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-brazil');
}

export default function CoxaotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-brazil" />;
}
