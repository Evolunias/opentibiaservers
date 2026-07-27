import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-usa');
}

export default function MiracleCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-usa" />;
}
