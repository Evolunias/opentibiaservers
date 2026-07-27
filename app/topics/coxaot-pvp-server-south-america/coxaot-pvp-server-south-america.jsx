import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-south-america');
}

export default function CoxaotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-south-america" />;
}
