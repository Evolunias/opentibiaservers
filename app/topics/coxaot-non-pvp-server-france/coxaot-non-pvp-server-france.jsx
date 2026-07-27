import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-non-pvp-server-france');
}

export default function CoxaotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-non-pvp-server-france" />;
}
