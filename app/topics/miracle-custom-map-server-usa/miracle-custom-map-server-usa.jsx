import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-usa');
}

export default function MiracleCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-usa" />;
}
