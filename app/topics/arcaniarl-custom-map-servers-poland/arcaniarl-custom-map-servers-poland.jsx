import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-poland');
}

export default function ArcaniarlCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-poland" />;
}
