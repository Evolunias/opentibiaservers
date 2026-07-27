import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-sweden');
}

export default function OlderaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-sweden" />;
}
