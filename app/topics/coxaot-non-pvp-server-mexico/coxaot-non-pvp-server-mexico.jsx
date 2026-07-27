import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-mexico');
}

export default function CoxaotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-mexico" />;
}
