import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-wars');
}

export default function OlderaWarsKeywordPage() {
  return <StaticKeywordPage slug="oldera-wars" />;
}
