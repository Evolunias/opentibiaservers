import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-south-america');
}

export default function CoxaotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-south-america" />;
}
