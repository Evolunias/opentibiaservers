import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-germany');
}

export default function CoxaotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-germany" />;
}
