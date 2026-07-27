import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-canada');
}

export default function RealeraNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-canada" />;
}
