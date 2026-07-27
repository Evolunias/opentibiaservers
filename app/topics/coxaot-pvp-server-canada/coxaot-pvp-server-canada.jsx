import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-canada');
}

export default function CoxaotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-canada" />;
}
