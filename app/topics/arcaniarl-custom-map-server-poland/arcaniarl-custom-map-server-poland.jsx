import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-server-poland');
}

export default function ArcaniarlCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-server-poland" />;
}
