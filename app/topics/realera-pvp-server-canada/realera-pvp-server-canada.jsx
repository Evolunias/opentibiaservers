import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-canada');
}

export default function RealeraPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-canada" />;
}
