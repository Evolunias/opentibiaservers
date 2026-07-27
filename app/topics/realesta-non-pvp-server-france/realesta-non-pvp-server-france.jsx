import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-france');
}

export default function RealestaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-france" />;
}
