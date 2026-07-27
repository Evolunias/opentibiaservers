import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-uk');
}

export default function ArcaniarlCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-uk" />;
}
