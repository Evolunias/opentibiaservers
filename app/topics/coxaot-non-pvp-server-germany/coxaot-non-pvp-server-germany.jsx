import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-germany');
}

export default function CoxaotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-germany" />;
}
