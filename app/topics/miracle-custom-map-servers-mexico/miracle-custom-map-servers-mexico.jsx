import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-mexico');
}

export default function MiracleCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-mexico" />;
}
