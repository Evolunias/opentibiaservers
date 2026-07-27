import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-canada');
}

export default function MiracleNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-canada" />;
}
