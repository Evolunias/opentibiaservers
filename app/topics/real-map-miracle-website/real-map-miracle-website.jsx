import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-website');
}

export default function RealMapMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-website" />;
}
