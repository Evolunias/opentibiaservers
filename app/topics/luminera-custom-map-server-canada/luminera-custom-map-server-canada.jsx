import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-canada');
}

export default function LumineraCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-canada" />;
}
