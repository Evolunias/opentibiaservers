import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-argentina-server');
}

export default function OlderaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-argentina-server" />;
}
