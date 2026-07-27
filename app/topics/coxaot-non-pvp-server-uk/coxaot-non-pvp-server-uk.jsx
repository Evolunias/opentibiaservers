import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-uk');
}

export default function CoxaotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-uk" />;
}
