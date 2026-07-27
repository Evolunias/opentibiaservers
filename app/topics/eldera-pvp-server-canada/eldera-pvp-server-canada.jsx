import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-canada');
}

export default function ElderaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-canada" />;
}
