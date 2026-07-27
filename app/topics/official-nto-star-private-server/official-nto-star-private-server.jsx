import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-private-server');
}

export default function OfficialNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-private-server" />;
}
