import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-private-server');
}

export default function TopNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-private-server" />;
}
