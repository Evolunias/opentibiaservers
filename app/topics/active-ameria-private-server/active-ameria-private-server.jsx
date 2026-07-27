import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-private-server');
}

export default function ActiveAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-private-server" />;
}
