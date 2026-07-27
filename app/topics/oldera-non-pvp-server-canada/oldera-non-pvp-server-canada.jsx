import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-canada');
}

export default function OlderaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-canada" />;
}
