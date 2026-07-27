import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-private-server');
}

export default function BestTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-private-server" />;
}
