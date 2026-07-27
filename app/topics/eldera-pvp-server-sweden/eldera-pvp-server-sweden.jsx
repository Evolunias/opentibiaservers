import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-sweden');
}

export default function ElderaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-sweden" />;
}
