import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-canada');
}

export default function ElderaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-canada" />;
}
