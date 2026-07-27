import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-poland');
}

export default function CoxaotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-poland" />;
}
