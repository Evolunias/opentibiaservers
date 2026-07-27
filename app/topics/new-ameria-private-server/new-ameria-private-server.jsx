import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-private-server');
}

export default function NewAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-private-server" />;
}
