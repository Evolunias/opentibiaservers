import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-sweden');
}

export default function ElderaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-sweden" />;
}
