import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-nto-star-server');
}

export default function NonPvpNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-nto-star-server" />;
}
