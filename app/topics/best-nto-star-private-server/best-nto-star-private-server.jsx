import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-private-server');
}

export default function BestNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-private-server" />;
}
