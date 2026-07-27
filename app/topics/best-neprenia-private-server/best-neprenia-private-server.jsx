import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-private-server');
}

export default function BestNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-private-server" />;
}
