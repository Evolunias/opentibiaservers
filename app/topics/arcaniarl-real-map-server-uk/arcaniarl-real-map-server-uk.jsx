import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-uk');
}

export default function ArcaniarlRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-uk" />;
}
