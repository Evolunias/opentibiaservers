import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-private-server');
}

export default function NewNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-private-server" />;
}
