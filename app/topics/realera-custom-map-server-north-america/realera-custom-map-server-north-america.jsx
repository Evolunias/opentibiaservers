import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-north-america');
}

export default function RealeraCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-north-america" />;
}
