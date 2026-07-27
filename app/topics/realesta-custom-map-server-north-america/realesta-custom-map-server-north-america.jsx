import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-north-america');
}

export default function RealestaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-north-america" />;
}
