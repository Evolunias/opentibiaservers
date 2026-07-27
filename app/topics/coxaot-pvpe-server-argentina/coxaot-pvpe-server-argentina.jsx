import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-argentina');
}

export default function CoxaotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-argentina" />;
}
