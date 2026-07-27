import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-wars');
}

export default function ElderaWarsKeywordPage() {
  return <StaticKeywordPage slug="eldera-wars" />;
}
