import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-poland');
}

export default function CoxaotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-poland" />;
}
