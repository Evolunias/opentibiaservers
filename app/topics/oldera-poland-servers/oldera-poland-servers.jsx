import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-poland-servers');
}

export default function OlderaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-poland-servers" />;
}
