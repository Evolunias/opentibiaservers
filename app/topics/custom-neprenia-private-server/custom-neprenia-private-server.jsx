import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-private-server');
}

export default function CustomNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-private-server" />;
}
