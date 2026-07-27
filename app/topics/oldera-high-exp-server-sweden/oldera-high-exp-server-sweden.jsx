import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-sweden');
}

export default function OlderaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-sweden" />;
}
