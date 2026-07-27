import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-poland');
}

export default function KasteriaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-poland" />;
}
