import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-brazil');
}

export default function CoxaotPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-brazil" />;
}
