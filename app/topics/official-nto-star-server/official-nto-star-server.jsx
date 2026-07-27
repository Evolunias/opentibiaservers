import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-server');
}

export default function OfficialNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-server" />;
}
