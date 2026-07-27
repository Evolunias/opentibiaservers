import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-argentina');
}

export default function MiracleCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-argentina" />;
}
