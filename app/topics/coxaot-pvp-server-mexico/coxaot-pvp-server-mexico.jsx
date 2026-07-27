import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-mexico');
}

export default function CoxaotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-mexico" />;
}
