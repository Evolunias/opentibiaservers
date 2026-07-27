import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-north-america');
}

export default function RealestaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-north-america" />;
}
