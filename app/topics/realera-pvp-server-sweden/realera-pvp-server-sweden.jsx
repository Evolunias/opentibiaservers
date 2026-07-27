import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-sweden');
}

export default function RealeraPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-sweden" />;
}
