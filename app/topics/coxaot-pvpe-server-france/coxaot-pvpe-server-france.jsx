import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-pvpe-server-france');
}

export default function CoxaotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-pvpe-server-france" />;
}
