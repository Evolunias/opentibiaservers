import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-uk');
}

export default function CoxaotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-uk" />;
}
