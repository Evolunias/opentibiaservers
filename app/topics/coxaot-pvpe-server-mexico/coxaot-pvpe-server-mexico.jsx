import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-mexico');
}

export default function CoxaotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-mexico" />;
}
