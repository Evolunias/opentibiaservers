import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-north-america');
}

export default function RealeraCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-north-america" />;
}
