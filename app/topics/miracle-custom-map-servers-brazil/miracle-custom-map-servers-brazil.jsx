import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-brazil');
}

export default function MiracleCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-brazil" />;
}
