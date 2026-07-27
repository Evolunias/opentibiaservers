import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-private-server');
}

export default function OfficialNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-private-server" />;
}
