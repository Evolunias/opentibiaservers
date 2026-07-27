import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-brazil');
}

export default function CoxaotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-brazil" />;
}
