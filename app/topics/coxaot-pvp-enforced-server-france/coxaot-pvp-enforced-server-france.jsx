import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-enforced-server-france');
}

export default function CoxaotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-enforced-server-france" />;
}
