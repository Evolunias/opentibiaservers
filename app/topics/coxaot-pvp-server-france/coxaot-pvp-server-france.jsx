import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvp-server-france');
}

export default function CoxaotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvp-server-france" />;
}
