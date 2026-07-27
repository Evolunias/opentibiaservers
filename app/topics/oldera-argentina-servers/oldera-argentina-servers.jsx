import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-argentina-servers');
}

export default function OlderaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-argentina-servers" />;
}
