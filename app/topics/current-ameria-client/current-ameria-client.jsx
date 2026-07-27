import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-client');
}

export default function CurrentAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-client" />;
}
