import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-latin-america');
}

export default function CoxaotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-latin-america" />;
}
