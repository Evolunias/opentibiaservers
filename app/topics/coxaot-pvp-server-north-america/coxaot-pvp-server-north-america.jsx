import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-north-america');
}

export default function CoxaotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-north-america" />;
}
