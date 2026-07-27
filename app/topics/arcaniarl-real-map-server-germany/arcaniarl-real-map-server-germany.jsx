import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-germany');
}

export default function ArcaniarlRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-germany" />;
}
