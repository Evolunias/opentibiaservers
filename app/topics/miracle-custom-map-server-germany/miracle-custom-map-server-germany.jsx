import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-germany');
}

export default function MiracleCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-germany" />;
}
