import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-private-server');
}

export default function CustomAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-private-server" />;
}
