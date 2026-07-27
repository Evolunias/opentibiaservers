import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-europe');
}

export default function MiracleCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-europe" />;
}
