import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-south-america');
}

export default function CoxaotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-south-america" />;
}
