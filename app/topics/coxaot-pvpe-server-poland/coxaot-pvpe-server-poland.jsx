import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-poland');
}

export default function CoxaotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-poland" />;
}
