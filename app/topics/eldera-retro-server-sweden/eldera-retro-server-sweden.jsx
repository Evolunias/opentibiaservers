import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-sweden');
}

export default function ElderaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-sweden" />;
}
