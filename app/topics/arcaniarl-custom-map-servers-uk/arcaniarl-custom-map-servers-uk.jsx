import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-uk');
}

export default function ArcaniarlCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-uk" />;
}
