import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-europe');
}

export default function ArcaniarlCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-europe" />;
}
