import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-france');
}

export default function RealeraNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-france" />;
}
