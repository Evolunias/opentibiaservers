import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-server');
}

export default function CurrentAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-server" />;
}
