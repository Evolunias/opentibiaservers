import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-mexico');
}

export default function MiracleCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-mexico" />;
}
