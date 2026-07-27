import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-canada');
}

export default function LumineraCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-canada" />;
}
