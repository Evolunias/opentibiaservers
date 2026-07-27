import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-private-server');
}

export default function CurrentAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-private-server" />;
}
