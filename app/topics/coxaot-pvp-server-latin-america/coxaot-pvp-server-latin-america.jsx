import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-latin-america');
}

export default function CoxaotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-latin-america" />;
}
