import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-nto-star-server');
}

export default function PvpNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-nto-star-server" />;
}
