import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-canada');
}

export default function RealestaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-canada" />;
}
