import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-alternatives');
}

export default function ElderaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="eldera-alternatives" />;
}
