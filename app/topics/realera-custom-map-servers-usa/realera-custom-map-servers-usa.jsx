import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-usa');
}

export default function RealeraCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-usa" />;
}
