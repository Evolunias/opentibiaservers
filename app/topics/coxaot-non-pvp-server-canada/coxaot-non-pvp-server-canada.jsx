import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-canada');
}

export default function CoxaotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-canada" />;
}
