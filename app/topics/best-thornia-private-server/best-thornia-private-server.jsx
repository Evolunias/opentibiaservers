import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-private-server');
}

export default function BestThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-private-server" />;
}
