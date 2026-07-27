import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-poland');
}

export default function MiracleCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-poland" />;
}
