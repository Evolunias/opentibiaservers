import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-north-america');
}

export default function CoxaotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-north-america" />;
}
