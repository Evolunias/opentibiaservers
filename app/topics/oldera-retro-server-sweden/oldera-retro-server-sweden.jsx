import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-sweden');
}

export default function OlderaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-sweden" />;
}
