import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-europe');
}

export default function CoxaotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-europe" />;
}
