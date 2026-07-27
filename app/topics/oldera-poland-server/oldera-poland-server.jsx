import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-poland-server');
}

export default function OlderaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-poland-server" />;
}
