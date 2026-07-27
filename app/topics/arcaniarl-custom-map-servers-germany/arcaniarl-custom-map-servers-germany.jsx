import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-germany');
}

export default function ArcaniarlCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-germany" />;
}
