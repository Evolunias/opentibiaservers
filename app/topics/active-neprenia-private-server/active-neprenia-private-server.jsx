import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-private-server');
}

export default function ActiveNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-private-server" />;
}
