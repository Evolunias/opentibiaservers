import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-canada');
}

export default function OlderaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-canada" />;
}
