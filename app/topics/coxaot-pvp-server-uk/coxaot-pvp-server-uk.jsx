import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-uk');
}

export default function CoxaotPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-uk" />;
}
