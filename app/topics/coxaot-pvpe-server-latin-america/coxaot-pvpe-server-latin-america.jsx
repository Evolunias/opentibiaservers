import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-latin-america');
}

export default function CoxaotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-latin-america" />;
}
