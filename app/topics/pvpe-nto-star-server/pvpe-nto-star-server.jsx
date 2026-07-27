import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-nto-star-server');
}

export default function PvpeNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-nto-star-server" />;
}
