import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-private-server');
}

export default function PopularYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-private-server" />;
}
