import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-north-america');
}

export default function CoxaotNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-north-america" />;
}
