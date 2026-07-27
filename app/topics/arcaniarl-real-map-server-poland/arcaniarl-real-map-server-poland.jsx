import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-poland');
}

export default function ArcaniarlRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-poland" />;
}
